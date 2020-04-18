import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      values: props.initialValues || {}
    };
  }
  next = values =>
    this.setState(state => ({
      page: state.page + 1
    }));

  previous = () => {
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
    this.props.previousPage && this.props.previousPage(this.state.page);
  };
  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */
  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page - 1
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const arraychildren = React.Children.toArray(children);
    const isLastPage = page === React.Children.count(children);
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page - 1];
    const isLastPage = page === React.Children.count(children);
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button type="button" onClick={this.previous}>
                  « Previous
                </button>
              )}
              {!isLastPage && (
                <button
                  onClick={() => this.props.nextPage(this.state.page)}
                  type="submit"
                >
                  Next »
                </button>
              )}
              {isLastPage && (
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </Form>
    );
  }
}
