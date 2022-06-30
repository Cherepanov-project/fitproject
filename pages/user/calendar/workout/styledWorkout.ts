import styled from "styled-components"

interface ItemWorkoutProps {
    fontSize?: string
    color?: string
}

interface DropMenuProps {
    $display: boolean
}

export const WorkoutUl = styled.ul`
    margin: 0;
    padding: 0;
    line-height: 30px;
`
export const ListWorkoutName = styled.li`
    height: 70px;
    justify-content: space-between;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding-left: 60px;
    padding-right: 40px;
    margin-bottom: 15px;
`

export const ItemWorkoutDiv = styled.div<ItemWorkoutProps>`
    width: 15%;
    color: ${({ color }) => color || "black"};
    font-size: ${({ fontSize }) => fontSize || "14px"};
`

export const ListItem = styled.li`
    height: 100px;
    justify-content: space-between;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    border-top: 1px solid #f0f2f5;
    padding-left: 60px;
    padding-right: 20px;
    align-items: center;
`

export const ButtonMenu = styled.button`
    color: #b0bac9;
    border: none;
    font-size: 30px;
    cursor: pointer;
    background: transparent;
`
export const DropMenu = styled.div<DropMenuProps>`
    display: ${props => {
        return props.$display ? "block" : "none"
    }};
    position: absolute;
    background-color: #7b809a;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 2px;
    padding: 2px;
    top: -30px;
    right: 35px;
`
export const ButtonDiv = styled.div`
    position: relative;
`

export const WorkoutLink = styled.a`
    text-decoration: none;
    color: #4caf50;
    cursor: pointer;
`
