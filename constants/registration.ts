export const regStep = (step, index) => ({
        textTransform: "uppercase",
        margin: "0 0.5rem 1.8rem",
        width: "100%",
        height: "2.4rem",
        fontSize: "14px",
        textAlign: "center",
        borderRadius: "5px",
        border: "solid 2px #C9CFDA",
        font: `${
            step === index
                ? "#51AD78"
                : step > index
                    ? "#56CCF2"
                    : "#C9CFDA"
        }`,
        borderColor: `${
            step === index
                ? "#51AD78"
                : step > index
                    ? "#56CCF2"
                    : "#B0BAC9"
        }`,
        span: {
                color: `${
                    step === index
                        ? "#51AD78"
                        : step > index
                            ? "#56CCF2"
                            : "#B0BAC9"
                }`,
        },
})