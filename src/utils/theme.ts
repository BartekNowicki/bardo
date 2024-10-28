import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#ffffff', // Primary text color
    },
    background: {
      default: '#000000', // Background color
    },
    custom: {
          secondaryColor: 'rgba(63, 81, 181, 0.9)',           // General icon color if needed
          textSecondaryColor: 'rgba(245, 245, 245, 0.8)',     // Light text color
          headerLineColor: 'rgba(33, 150, 243, 0.8)',         // Header line color
          backgroundColor: 'rgba(30, 30, 30, 0.8)',           // Card background color
          noteIconColor: 'rgba(255, 112, 67, 0.8)',           // Vocabulary Items
          schoolIconColor: 'rgba(102, 187, 106, 0.8)',        // Practice
          bookIconColor: 'rgba(66, 165, 245, 0.8)',           // Discussion Stories
          forumIconColor: 'rgba(171, 71, 188, 0.8)',          // Conversations
          videoLibraryIconColor: 'rgba(255, 167, 38, 0.8)',   // Video Player
        },
  },
});
