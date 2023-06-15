import styled from 'styled-components'

export const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--body-background);
`

export const SidebarHeader = styled.div`
    padding: 1rem 0;
    margin: 0 auto;

    & img {
        width: 2.7rem;
    }

    & .active {
        color: var(--second-color);
    }
`

export const SidebarMenu = styled.ul`
    margin: 0 auto;
    padding: 2rem 0;
`

export const SidebarMenuItem = styled.li`
    text-align: center;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:hover {
        color: var(--second-color);
    }

    & > a {
        color: var(--white);
        text-decoration: none;
    }
`

export const SidebarFooter = styled.div`
    padding: 1rem 0;
    align-self: center;
    color: var(--white);
    cursor: pointer;
`
