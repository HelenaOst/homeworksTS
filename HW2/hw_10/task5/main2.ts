
const sessionsListRaw: string | null = localStorage.getItem('sessionsList');
if (sessionsListRaw) {
for (let session of sessionsList) {
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.innerHTML = session.toString();
    document.body.appendChild(wrapper);
}}