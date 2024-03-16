import './styles.css'

export const ToggleTheme = ({ toggle }) =>{
    return(
        <div className="toggle-switch">
            <label className="switch-label">
                <input type="checkbox" className="checkbox" onClick={toggle}/>
                <span className="slider"></span>
            </label>
        </div>  
    )
};