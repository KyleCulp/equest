import React from 'react';

interface Props { }

const NavBar: React.FC<Props> = () => {
  return <div>Navbar</div>
  // return (
  //   <Flex px={2} color="white" bg="black" alignItems="center">
  //     <Text p={2} fontWeight="bold">
  //       Rebass
  //     </Text>
  //     <Box mx="auto" />
  //     <Link variant="nav" href="#!">
  //       Profile
  //     </Link>
  //   </Flex>
  // );
};

export default NavBar;
