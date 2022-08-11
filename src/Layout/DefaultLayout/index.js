import { NavLink } from "react-router-dom";

function LayoutDefault() {
    return (  
       <>
             <div
        className="container-fluid bg-primary d-flex p-0 m-0"
        style={{ height: "100vh" }}
      >
        <div
          className="d-flex justify-content-center flex-column"
          style={{
            height: "100%",
            backgroundColor: "#1F1F2D",
          
          }}
        >
      <NavLink to="/" className="bi bi-house-fill item-menu-selection"><div className='text-menu-selection'>Home</div></NavLink>
          <NavLink to="/setting" className="bi bi-gear-fill item-menu-selection"><div className='text-menu-selection'>Setting</div></NavLink>
          <NavLink to="/report" className="bi bi-receipt item-menu-selection"><div className='text-menu-selection'>Report</div></NavLink>
          <NavLink to="/about" className="bi bi-telephone-fill item-menu-selection"><div className='text-menu-selection'>About</div></NavLink>
          <NavLink to="/login" className="bi bi-door-closed-fill item-menu-selection"><div className='text-menu-selection'>Logout</div></NavLink>
        </div>
        <div className="main"></div>
      </div>
       </>
    );
}

export default LayoutDefault;