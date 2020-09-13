module.exports = {

    browserSelect(BrowserName) {
        switch(BrowserName) {

            case 'Chrome' : return 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';
            
            case 'IE'     : return 'C:/Program Files/internet explorer/iexplore.exe';

            case 'Edge'   : return 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

            case 'Firefox': return 'C:/Program Files/Mozilla Firefox/firefox.exe';

            default       : ''

        }
    }
}