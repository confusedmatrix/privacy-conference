import { hasConferenceStarted } from './agenda';

export const speakerTitle = 'Become a Speaker';
export const registerTitle = hasConferenceStarted ? 'Join us on Slack' : 'Get Tickets';

export const speakerLink = 'https://forms.gle/wpKY6cTL6p5k43as7';
export const registerLink = hasConferenceStarted
  ? 'https://slack.openmined.org'
  : 'https://www.eventbrite.co.uk/e/openmined-privacy-conference-2020-tickets-116575230653';

export const speakersEmoji =
  'https://emojis.slackmojis.com/emojis/images/1584726375/8272/blob-cool.gif';
export const agendaEmoji =
  'https://emojis.slackmojis.com/emojis/images/1568570821/6412/meow_popcorn.gif';
export const sponsorsEmoji =
  'https://emojis.slackmojis.com/emojis/images/1531847402/4229/blob-clap.gif';
export const resourcesEmoji =
  'https://emojis.slackmojis.com/emojis/images/1593555389/9579/blob_excited.gif';
