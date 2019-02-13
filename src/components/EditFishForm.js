import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };
  handleChange = event => {
    // Update that fish
    // 1. Take a copy of the  current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // 2. Update the state
    this.props.updateFish(this.props.index, updatedFish);
  };

  confirmDelete = event => {
    const fishName = this.props.fish.name;
    const confirm = window.confirm(
      "Are you sure you want to delete " + fishName + " ?"
    );
    if (confirm) {
      this.props.deleteFish(this.props.index);
    }
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
          type="text"
        />
        <input
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
          type="text"
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
          type="text"
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
          type="text"
        />
        <input
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
          type="text"
        />
        <button onClick={this.confirmDelete}>DELETE FISH</button>
      </div>
    );
  }
}

export default EditFishForm;
