/* eslint-disable react/prop-types */
import { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eachCount: 1,
      TotalCalorie: this.props.Calorie,
    };
  }

  render() {
    console.log(this.props)
    // eslint-disable-next-line react/prop-types
    let Name = this.props.Name;
    // eslint-disable-next-line react/prop-types
    let Image = this.props.Image;
    let Calorie = this.props.Calorie;
    let Index = this.props.Index;

    const handleClick = () => {
      let settingState = {
        eachCount: this.state.eachCount + 1,
        TotalCalorie: this.props.Calorie * (this.state.eachCount + 1),
      };
      this.setState(settingState);
    };

    const buttonclick = () => {
      let change = {
        eachCount: 0,
        TotalCalorie: 0,
      };
      this.setState(change);
    };

    return (
      <div>
        <div className="container">
          <div className="box" key={Index}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img className="imageoffood" src={Image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{Name}</strong> <br />
                    <small>{Calorie}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons incbutton">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      value={this.state.eachCount}
                      onChange={()=>{}}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={handleClick}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="calcCalorie">
            <div>
              {this.state.eachCount} {Name} =
            </div>
            <div>{this.state.TotalCalorie} calories</div>
            <div>
              <button className="reset" onClick={buttonclick}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodBox;
