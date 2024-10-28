import React from 'react';
import { Typography, Box, Grid, useTheme } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';
import BookIcon from '@mui/icons-material/Book';

const EnglishConversations: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{
        backgroundColor: 'rgba(30, 30, 30, 0.95)',
        color: 'rgba(255, 255, 255, 0.75)',
        textAlign: 'center',
        padding: '50px',
        boxShadow: 'none',
        border: 'none',
        borderRadius: '10%',
        marginBottom: '30px'
    }}>
      <Typography variant="h5" sx={{ marginBottom: '10px' }}>
        For the student. For the teacher.
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: '35px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontStyle: 'italic'
        }}
      >
        Save your vocabulary, build skills, keep your memory sharp. Track your progress.
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {[
          {
            icon: <NoteIcon sx={{ color: theme.palette.custom?.noteIconColor, fontSize: '2rem' }} />,
            text: "Save your vocabulary items - phrase, translation, definition, usage",
            color: theme.palette.custom?.noteIconColor
          },
          {
            icon: <SchoolIcon sx={{ color: theme.palette.custom?.schoolIconColor, fontSize: '2rem' }} />,
            text: "Practice through various games and activities",
            color: theme.palette.custom?.schoolIconColor
          },
          {
            icon: <BookIcon sx={{ color: theme.palette.custom?.bookIconColor, fontSize: '2rem' }} />,
            text: "Discussion stories - perfect for practice and reflection",
            color: theme.palette.custom?.bookIconColor
          },
          {
            icon: <ForumIcon sx={{ color: theme.palette.custom?.forumIconColor, fontSize: '2rem' }} />,
            text: "Conversations - real dialogs full of useful everyday phrases",
            color: theme.palette.custom?.forumIconColor
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index} display="flex" justifyContent="center">
            <Box
              sx={{
                padding: '15px',
                backgroundColor: theme.palette.custom?.backgroundColor,
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 3px 7px rgba(0,0,0,0.3)',
                width: '175px',
                height: '175px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {item.icon}
              <Typography variant="subtitle2" sx={{ color: item.color, marginTop: '10px' }}>
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EnglishConversations;
