import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import Signup from "../components/User/Authentication/Signup";
import Login from "../components/User/Authentication/Login";
import "./Pages.scss";
const AuthenticationPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleslidechange = (index) => {
    setTabIndex(index);
  };
  console.log(tabIndex);
  return (
    <>
      <Box className="row mt-5 mb-3 authentication-box p-3">
        <Box className="col-lg-5 col-md-6 col-12 mx-auto authentication-formbox p-5">
          <Tabs
            variant="soft-rounded"
            colorScheme="teal"
            onChange={(index) => handleslidechange(index)}
          >
            <TabList>
              <Tab className="w-50">Login</Tab>
              <Tab className="w-50">Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default AuthenticationPage;
