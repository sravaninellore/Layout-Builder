// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          <div className="navbar-container">
            {showLeftNavbar && (
              <div className="left-navbar">
                <h1 className="body-card-heading">Left Navbar Menu</h1>
                <ul className="left-navbar-items">
                  <li className="body-card-description">Item 1</li>
                  <li className="body-card-description">Item 2</li>
                  <li className="body-card-description">Item 3</li>
                  <li className="body-card-description">Item 4</li>
                </ul>
              </div>
            )}

            {showContent && (
              <div className="content">
                <h1 className="body-card-heading">Content</h1>

                <p className="body-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}

            {showRightNavbar && (
              <div className="right-navbar">
                <h1 className="body-card-heading">Right Navbar</h1>
                <div className="right-navbar-items">
                  <p className="body-card-description ads">Ad 1</p>
                  <p className="body-card-description ads">Ad 2</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
