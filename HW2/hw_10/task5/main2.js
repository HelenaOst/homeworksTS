"use strict";
const sessionsListRaw = localStorage.getItem('sessionsList');
if (sessionsListRaw) {
    for (let session of sessionsList) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = session.toString();
        document.body.appendChild(wrapper);
    }
}
