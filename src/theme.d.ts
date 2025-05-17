import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom?: {
      secondaryColor: string;
      textSecondaryColor: string;
      headerLineColor: string;
      backgroundColor: string;
      noteIconColor: string;
      schoolIconColor: string;
      bookIconColor: string;
      forumIconColor: string;
      videoLibraryIconColor: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      secondaryColor?: string;
      textSecondaryColor?: string;
      headerLineColor?: string;
      backgroundColor?: string;
      noteIconColor?: string;
      schoolIconColor?: string;
      bookIconColor?: string;
      forumIconColor?: string;
      videoLibraryIconColor?: string;
    };
  }
}
