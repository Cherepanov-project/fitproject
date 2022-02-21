import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {
    Typography,
    Link,
    Input,
    InputAdornment,
    Button
} from "@mui/material/";
import AddIcon from '@mui/icons-material/Add';

import {
    MainContainer,
    ContainerHeader,
    Trends,
    CardsOnTrends,
    GraphOnTrends,
    BlockHeader,
    BlockHeaderLeftSide,
    BlockHeaderRightSide,
    CurveDesignation,
    CurveDesignationColor,
    TicketsAndTasks,
    Widget,
    BlockHeaderRightSideStyled
} from "./overviewStyles";

import { headerCardsData } from "../../../model/headerCards/headerCards";
import { trendsCardsData } from "../../../model/trendsCards/trendsCards";
import { ticketsData } from "../../../model/widgets/tickets/tickets";
import { tasksData } from "../../../model/widgets/tasks/tasks"

import Card from "../../../common/Card/card";
import TicketsWidgetItem from "../../../common/WidgetItem/ticketsWidgetItem";
import TasksWidgetItem from "../../../common/WidgetItem/tasksWidgetItem";
import { WidgetItemContainer, WidgetItemContent } from "../../../common/WidgetItem/widgetItemStyles";
const DynamicGraph = dynamic(() => import("../../../common/Graph/Graph"), { ssr: false });

const Overview = () => {

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
            </Head>
            <MainContainer>
                <ContainerHeader>
                    {headerCardsData.map((item) =>
                        <Card name={item.name} key={item.name} value={item.value} padding="24px 32px" width="258px" height="134px" grow="0" margin="0" fontName="19px" fontValue="40px" />
                    )}
                </ContainerHeader>
                <Trends>
                    <GraphOnTrends>
                        <BlockHeader >
                            <BlockHeaderLeftSide >
                                <Typography fontSize="19px" color="rgba(37, 39, 51, 1)" fontWeight="bolder" lineHeight="24px">
                                    Today’s trends
                                </Typography>
                                <Typography fontSize="12px" color="rgba(159, 162, 180, 1)" fontWeight="400" marginTop="8px" lineHeight="16px">
                                    as of 25 May 2019, 09:41 PM
                                </Typography>
                            </BlockHeaderLeftSide>
                            <BlockHeaderRightSide>
                                <CurveDesignation>
                                    <CurveDesignationColor color={"rgba(55, 81, 255, 1)"} />
                                    <Typography fontSize="12px" color="rgba(159, 162, 180, 1)" fontWeight="400" marginTop="8px" lineHeight="16px">
                                        Today
                                    </Typography>
                                </CurveDesignation>
                                <CurveDesignation>
                                    <CurveDesignationColor color={"rgba(223, 224, 235, 1)"} />
                                    <Typography fontSize="12px" color="rgba(159, 162, 180, 1)" fontWeight="400" marginTop="8px" lineHeight="16px">
                                        Yesterday
                                </Typography>
                                </CurveDesignation>
                            </BlockHeaderRightSide>
                        </BlockHeader >
                        <DynamicGraph />
                    </GraphOnTrends>
                    <CardsOnTrends>
                        {trendsCardsData.map((item) =>
                            <Card name={item.name} key={item.name} value={item.value} padding="24px 32px" width="342px" height="109px" grow="0" margin="0" fontName="16px" fontValue="24px" />
                        )}
                    </CardsOnTrends>
                </Trends>
                <TicketsAndTasks>
                    <Widget>
                        <BlockHeader>
                            <BlockHeaderLeftSide>
                                <Typography fontSize="19px" color="rgba(37, 39, 51, 1)" fontWeight="bolder" lineHeight="24px">
                                    Unresolved tickets
                                </Typography>
                                <Typography fontSize="12px" color="rgba(159, 162, 180, 1)" fontWeight="400" marginTop="8px" lineHeight="16px">
                                    Group: Support
                                </Typography>
                            </BlockHeaderLeftSide>
                            <BlockHeaderRightSideStyled>
                                <Link href="#" underline="hover">View details</Link>
                            </BlockHeaderRightSideStyled>
                        </BlockHeader>
                        {ticketsData.map((item) =>
                            <TicketsWidgetItem name={item.name} key={item.name} value={item.value} padding="24px 32px" />
                        )}
                    </Widget>
                    <Widget>
                        <BlockHeader>
                            <BlockHeaderLeftSide>
                                <Typography fontSize="19px" color="rgba(37, 39, 51, 1)" fontWeight="bolder" lineHeight="24px">
                                    Tasks
                                </Typography>
                                <Typography fontSize="12px" color="rgba(159, 162, 180, 1)" fontWeight="400" marginTop="8px" lineHeight="16px">
                                    Today
                                </Typography>
                            </BlockHeaderLeftSide>
                            <BlockHeaderRightSideStyled>
                                <Link href="#" underline="hover">View all</Link>
                            </BlockHeaderRightSideStyled>
                        </BlockHeader>
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
                                        backgroundColor: "rgba(240, 241, 247, 1)",
                                        padding: "0",
                                    }}
                                    type="submit"
                                >
                                    <AddIcon
                                        sx={{
                                            color: "#9FA2B4"
                                        }}
                                    />
                                </Button>
                            </WidgetItemContent>
                        </WidgetItemContainer>
                        {tasksData.map((item) =>
                            <TasksWidgetItem name={item.name} key={item.name} value={item.value} padding="24px 32px" />
                        )}
                    </Widget>
                </TicketsAndTasks>
            </MainContainer>
        </>
    )
};

export default Overview;