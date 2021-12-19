import React, { useState } from "react";
import cartoon from "./card";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

function Cards() {
    const labels = {
        0.5: "Useless",
        1: "Useless+",
        1.5: "Poor",
        2: "Poor+",
        2.5: "Ok",
        3: "Ok+",
        3.5: "Good",
        4: "Good+",
        4.5: "Excellent",
        5: "Excellent+",
    };
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [index, setIndex] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const { name, image, about } = cartoon[index];
    const checkIndex = (i) => {
        if (i > cartoon.length - 1) {
            return 0;
        }
        if (i < 0) {
            return cartoon.length - 1;
        }
        return i;
    };
    const nextIndex = (i) => {
        setIndex((index) => {
            const nexIndex = index + 1;
            return checkIndex(nexIndex);
        });
    };
    const prevIndex = (i) => {
        setIndex((index) => {
            const prevIndex = index - 1;
            return checkIndex(prevIndex);
        });
    };
    const randomCartoon = () => {
        let randomNumber = Math.floor(Math.random() * cartoon.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkIndex(randomNumber));
    };
    return (
        <>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>{" "}
                </div>{" "}
                <h4 className="author"> {name} </h4>{" "}
                <p className="info">
                    {" "}
                    {readMore ? about : `${about.substring(0, 150)}...`}{" "}
                    <button className="random-btn" onClick={() => setReadMore(!readMore)}>
                        {" "}
                        {readMore ? "show less" : "read more"}{" "}
                    </button>{" "}
                </p>{" "}
                <div className="Content" >Rate Me</div>
                <div className="Icon">
                    <Box
                        sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                        }}
                    ><Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={
                                <StarIcon
                                    style={{
                                        opacity: 0.55,
                                    }}
                                    fontSize="inherit"
                                />
                            }
                        />{" "}
                        {value !== null && (
                            <Box
                                sx={{
                                    ml: 2,
                                }}
                            >
                                {" "}
                                {labels[hover !== -1 ? hover : value]}{" "}
                            </Box>
                        )}{" "}
                    </Box>{" "}
                    </div>
                <div className="button-container">
                    <button className="prev-btn" onClick={prevIndex}>
                        <FaChevronLeft />
                    </button>{" "}
                    <button className="next-btn" onClick={nextIndex}>
                        <FaChevronRight />
                    </button>{" "}
                </div>{" "}
            </article>
        </>
    );
}

export default Cards;
