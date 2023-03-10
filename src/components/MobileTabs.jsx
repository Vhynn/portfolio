import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Gallery from "./Gallery";
import { tabItems } from "../data";
import MobileDrawer from "./MobileDrawer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MobileTabs({ props }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "sticky",
        height: "100%",
      }}
    >
      <MobileDrawer>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          {props.tabs.map((item) => (
            <Tab
              key={item.id}
              sx={{ fontWeight: "bold" }}
              label={item.title}
              {...a11yProps(item.a11yProps)}
            />
          ))}
        </Tabs>
      </MobileDrawer>
      {props.tabs.map((item) => (
        <TabPanel key={item.id} value={value} index={item.a11yProps}>
          <Gallery galleryProp={tabItems[item.id]} />
        </TabPanel>
      ))}
    </Box>
  );
}
