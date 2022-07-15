import React from "react"
import dynamic from "next/dynamic"
import { Normalize } from "styled-normalize"
import { Typography, Link, Input, Button } from "@mui/material/"
import AddIcon from "@mui/icons-material/Add"

import { withLayout } from "../../../containers/Layout-admin/layoutAdmin"

import FontStyles from "../../../utils/fonts/fontStyles"

import { headerCardsData } from "../../../models/cards/headerCards/headerCards"
import { trendsCardsData } from "../../../models/cards/trendsCards/trendsCards"

import { ticketsData } from "../../../models/widgets/tickets/tickets"
import { tasksData } from "../../../models/widgets/tasks/tasks"

import Card from "../../../components/Card/card"
import TicketsWidgetItem from "../../../components/WidgetItem/ticketsWidgetItem"
import TasksWidgetItem from "../../../components/WidgetItem/tasksWidgetItem"

import {
    WidgetItemContainer,
    WidgetItemContent,
} from "../../../components/WidgetItem/widgetItem.styles"
import {
    StyleMainContainer,
    StyleContainerHeader,
    StyleTrends,
    StyleCardsOnTrends,
    StyleGraphOnTrends,
    StyleBlockHeader,
    StyleBlockHeaderLeftSide,
    StyleBlockHeaderRightSide,
    StyleCurveDesignation,
    StyleCurveDesignationColor,
    StyleTicketsAndTasks,
    StyleWidget,
    StyleBlockHeaderRightSideStyled,
} from "./overview.styles"

const DynamicGraph = dynamic(() => import("../../../components/Graph/graph"), {
    ssr: false,
})

const Overview = () => {
    return (
        <>
            <Normalize />
            <FontStyles />
            <StyleMainContainer>
                <StyleContainerHeader>
                    {headerCardsData.map(item => (
                        <Card
                            name={item.name}
                            key={item.name}
                            value={item.value}
                            padding="24px 32px"
                            width="25%"
                            height="134px"
                            grow="0"
                            margin="0 1rem 1rem 0"
                            fontName="19px"
                            fontValue="40px"
                            outline="1px solid rgba(223, 224, 235, 1)"
                        />
                    ))}
                </StyleContainerHeader>
                <StyleTrends>
                    <StyleGraphOnTrends>
                        <StyleBlockHeader>
                            <StyleBlockHeaderLeftSide>
                                <Typography
                                    fontSize="19px"
                                    color="rgba(37, 39, 51, 1)"
                                    fontWeight="bolder"
                                    lineHeight="24px"
                                >
                                    Today’s trends
                                </Typography>
                                <Typography
                                    fontSize="12px"
                                    color="rgba(159, 162, 180, 1)"
                                    fontWeight="400"
                                    marginTop="8px"
                                    lineHeight="16px"
                                >
                                    as of 25 May 2019, 09:41 PM
                                </Typography>
                            </StyleBlockHeaderLeftSide>
                            <StyleBlockHeaderRightSide>
                                <StyleCurveDesignation>
                                    <StyleCurveDesignationColor
                                        color={"rgba(55, 81, 255, 1)"}
                                    />
                                    <Typography
                                        fontSize="12px"
                                        color="rgba(159, 162, 180, 1)"
                                        fontWeight="400"
                                        marginTop="8px"
                                        lineHeight="16px"
                                    >
                                        Today
                                    </Typography>
                                </StyleCurveDesignation>
                                <StyleCurveDesignation>
                                    <StyleCurveDesignationColor
                                        color={"rgba(223, 224, 235, 1)"}
                                    />
                                    <Typography
                                        fontSize="12px"
                                        color="rgba(159, 162, 180, 1)"
                                        fontWeight="400"
                                        marginTop="8px"
                                        lineHeight="16px"
                                    >
                                        Yesterday
                                    </Typography>
                                </StyleCurveDesignation>
                            </StyleBlockHeaderRightSide>
                        </StyleBlockHeader>
                        <DynamicGraph />
                    </StyleGraphOnTrends>
                    <StyleCardsOnTrends>
                        {trendsCardsData.map(item => (
                            <Card
                                name={item.name}
                                key={item.name}
                                value={item.value}
                                padding="5px"
                                width="100%"
                                height="109px"
                                grow="0"
                                margin="0"
                                fontName="16px"
                                fontValue="24px"
                                outline=""
                            />
                        ))}
                    </StyleCardsOnTrends>
                </StyleTrends>
                <StyleTicketsAndTasks>
                    <StyleWidget>
                        <StyleBlockHeader>
                            <StyleBlockHeaderLeftSide>
                                <Typography
                                    fontSize="19px"
                                    color="rgba(37, 39, 51, 1)"
                                    fontWeight="bolder"
                                    lineHeight="24px"
                                >
                                    Unresolved tickets
                                </Typography>
                                <Typography
                                    fontSize="12px"
                                    color="rgba(159, 162, 180, 1)"
                                    fontWeight="400"
                                    marginTop="8px"
                                    lineHeight="16px"
                                >
                                    Group: Support
                                </Typography>
                            </StyleBlockHeaderLeftSide>
                            <StyleBlockHeaderRightSideStyled>
                                <Link href="#" underline="hover">
                                    View details
                                </Link>
                            </StyleBlockHeaderRightSideStyled>
                        </StyleBlockHeader>
                        {ticketsData.map(item => (
                            <TicketsWidgetItem
                                name={item.name}
                                key={item.name}
                                value={item.value}
                                padding="24px 32px"
                            />
                        ))}
                    </StyleWidget>
                    <StyleWidget>
                        <StyleBlockHeader>
                            <StyleBlockHeaderLeftSide>
                                <Typography
                                    fontSize="19px"
                                    color="rgba(37, 39, 51, 1)"
                                    fontWeight="bolder"
                                    lineHeight="24px"
                                >
                                    Tasks
                                </Typography>
                                <Typography
                                    fontSize="12px"
                                    color="rgba(159, 162, 180, 1)"
                                    fontWeight="400"
                                    marginTop="8px"
                                    lineHeight="16px"
                                >
                                    Today
                                </Typography>
                            </StyleBlockHeaderLeftSide>
                            <StyleBlockHeaderRightSideStyled>
                                <Link href="#" underline="hover">
                                    View all
                                </Link>
                            </StyleBlockHeaderRightSideStyled>
                        </StyleBlockHeader>
                        <WidgetItemContainer>
                            <WidgetItemContent padding="24px 32px">
                                <Input
                                    sx={{
                                        width: "336px",
                                    }}
                                    placeholder="Create new task"
                                    disableUnderline
                                />
                                <Button
                                    sx={{
                                        height: "24px",
                                        maxWidth: "24px",
                                        minWidth: "24px",
                                        borderRadius: "8px",
                                        backgroundColor:
                                            "rgba(240, 241, 247, 1)",
                                        padding: "0",
                                    }}
                                    type="submit"
                                >
                                    <AddIcon
                                        sx={{
                                            color: "#9FA2B4",
                                        }}
                                    />
                                </Button>
                            </WidgetItemContent>
                        </WidgetItemContainer>
                        {tasksData.map(item => (
                            <TasksWidgetItem
                                name={item.name}
                                key={item.name}
                                value={item.value}
                                padding="24px 32px"
                            />
                        ))}
                    </StyleWidget>
                </StyleTicketsAndTasks>
            </StyleMainContainer>
        </>
    )
}

export default withLayout(Overview)
