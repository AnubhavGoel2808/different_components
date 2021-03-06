import React from 'react'

const Sidebar = () => {
    return (
        <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li><div className="user-view">
              <div className="background">
                <img src="images/office.jpg" />
                <p>user image</p>
              </div>
              <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
              <a href="#name"><span className="white-text name">John Doe</span></a>
              <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
</div>

    )
}

export default Sidebar
