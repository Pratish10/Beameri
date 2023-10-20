import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

const Faqs = () => {
  const [faqDatas, setFaqDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFaqsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://crowded-sweatpants-elk.cyclic.cloud/api/faqs/getAll"
      );
      const data = await response.json();
      if (response.ok) {
        // console.log(data);
        setFaqDatas(data.faqs);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFaqsData();
  }, []);

  const commonStyles = {
    ml: { xs: 2, sm: 20 },
    mr: { xs: 2, sm: 20 },
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ margin: "0 auto", px: 2, mt: 15, ...commonStyles }}>
        <Box>
          <Typography
            sx={{
              color: "#000",
              textAlign: "left",
              fontFamily: "Inria Serif",
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              py: 2,
            }}
          >
            FAQ&apos;s
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inria Sans",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              py: 2,
            }}
          >
            Lorem ipsum dolor sit ametipsum
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1000px",
          ...commonStyles,
        }}
      >
        {loading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress sx={{ color: "#f26a5a" }} />
          </Box>
        )}
        {faqDatas.map((faqData) => (
          <Accordion
            sx={{
              borderRadius: "2px",
              border: "1px solid #333",
              my: 2,
              width: "100%",
            }}
            key={faqData._id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inria Sans",
                  fontSize: "1.2rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {faqData.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inria Sans",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {faqData.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  );
};

export default Faqs;
