var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.8)'
  },
  content : {
    // position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    transform                  : 'translateX(-50%) translateY(-50%)',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    width                      : '300px',
    height                     : '200px'
  }
};

module.exports = modalStyle;
