import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
}

componentDidCatch = (error, info) => {
    this.ListeningStateChangedEvent({hasError: true, errorMessage: error});
}