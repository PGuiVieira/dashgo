import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Vieira</Text>
          <Text color="gray.300" fontSize="small">
            guivieira2812@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Guilherme Vieira"
        src="https://github.com/PGuiVieira.png"
      />
    </Flex>
  );
}
