import { Box, Divider, List, ListItem } from "@chakra-ui/layout";
import Image from "next/image";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Image src="/favicon.ico" height={60} width={120} />

      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px" />
      </Box>
    </Box>
  );
};

export default Sidebar;
