import radium from '../../../../libs/radium';

const fade = radium.keyframes({
  '50%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
});

export default {
  placeholder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  icon: {
    fontSize: '5.6rem',
    color: '#aaaaaa',
  },
  loading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#aaaaaa',
    animation: 'x 2s infinite',
    animationName: fade,
    fontSize: '1.8rem',
  },
};
