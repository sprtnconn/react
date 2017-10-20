import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Popup, Sidebar, Segment } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react'

import logo from '../vram.png';



export default class MenuTabular extends Component {
    constructor(props){
        super(props);
        this.toggleHome = this.toggleHome.bind(this);
        this.toggleWorkspaceMenu = this.toggleWorkspaceMenu.bind(this);
        this.state = {
			currentPage: 'home',
            activeMenuItem: 'home',
            workspaceVisible: false
        };
    }

	
	
    toggleHome(e){
        this.setState({
            activeMenuItem: 'home',
            workspaceVisible: false
        });
    }

    toggleWorkspaceMenu(e){
		if(this.state.currentPage === 'home' && !this.state.workspaceVisible === false){
			this.setState({ 
				workspaceVisible: !this.state.workspaceVisible,
				activeMenuItem: 'home'
			});
		}else{
			this.setState({ 
				workspaceVisible: !this.state.workspaceVisible,
				activeMenuItem: 'workspace'
			});	
		}
    }

    render() {
		
		const sidebarStyle = {
		  marginTop: '0',
		  borderTopColor: 'white'
		};
		const subMenuStyle = {
		  borderTopColor: 'white'
		};
		const logoStyle = {
			height: '75px',
			width: '200px'
		};
		
		
        return (
            <div>
                <Menu attached='top' tabular>
                    <Image src={logo} style={logoStyle}/>

                    <Menu.Item name='home' active={this.state.activeMenuItem === 'home'} position='right' onClick={this.toggleHome}/>
                    <Menu.Item name='workspace' active={this.state.activeMenuItem === 'workspace'} onMouseEnter={this.toggleWorkspaceMenu} />

                </Menu>
                <Sidebar.Pushable as={Segment} style={sidebarStyle}>
					<Sidebar as={Menu} animation='overlay' direction='top' visible={this.state.workspaceVisible} style={subMenuStyle}>
                        <Menu.Item name='home'>
                            Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <p>This gets covered/uncovered.</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                            <p>Test Info</p>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}