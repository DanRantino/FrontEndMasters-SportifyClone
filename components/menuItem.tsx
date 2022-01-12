import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout";
import NextLink from "next/link";
import { ComponentType, FC } from "react";
import { IconType } from "react-icons";

type prop = {
  name: string;
  icon: IconType;
  route: string;
};

interface Interface {
  item: prop;
}

const MenuItem: FC<Interface> = ({ item }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" name={item.name}>
      <LinkBox>
        <NextLink href={item.route} passHref>
          <LinkOverlay>
            <ListIcon as={item.icon} color="white" marginRight="20px" />
            {item.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};
export default MenuItem;
