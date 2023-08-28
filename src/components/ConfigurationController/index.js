// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickShowContent = () => {
        onToggleShowContent()
      }

      const onClickShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onClickShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-bg-container">
          <div className="configuration-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="input-container">
              <input
                onClick={onClickShowContent}
                checked={showContent}
                className="input"
                type="checkbox"
                id="content"
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                onClick={onClickShowLeftNavbar}
                checked={showLeftNavbar}
                className="input"
                type="checkbox"
                id="leftNavbar"
              />
              <label className="label" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                onClick={onClickShowRightNavbar}
                checked={showRightNavbar}
                className="input"
                type="checkbox"
                id="rightNavbar"
              />
              <label className="label" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
