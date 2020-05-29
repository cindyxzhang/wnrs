import React from "react";
import GenericButton from "../../components/GenericButton/index.js";

class Email extends React.Component {
  render() {
    return (
      <form>
        <p>Partner's Email</p>
        <input type="text" />
        <label>
          Message
          <textarea></textarea>
        </label>
        <GenericButton label="send"></GenericButton>
      </form>
    );
  }
}

export default Email;
