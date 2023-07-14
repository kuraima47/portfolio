import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarRoute, SidebarLinkHTML} from './SidebarElements'

const SideBarProject = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLinkHTML href="/kuraproject" onClick={toggle}>
                    Kura 2048
                </SidebarLinkHTML>
                <SidebarLinkHTML href="/btsproject" onClick={toggle}>
                    Ma Classe Entrem&ecirc;l&eacute;e
                </SidebarLinkHTML>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact">Contact</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBarProject;