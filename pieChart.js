var codeLabel = [],
    coverageData = [];
async function MessagesChart() {

    await getMessagesData()

    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'pie',

        data: {
            labels: codeLabel,
            datasets: [{
                label: 'Messages Coverage',
                backgroundColor: [
                    '#4dc9f6',
                    '#f67019',
                    '#f53794',
                    '#537bc4',
                    '#acc236',
                    '#166a8f',
                    '#DC143C',
                    '#58595b',
                    '#8549ba',
                    '#00FFFF',
                    '#008080',
                    '#FF00FF',
                    '#800080',
                    '#A52A2A',
                    'A0522DD'
                ],
                data: coverageData
            }],
            hoverOffset: 4
        },
        options: {
            tooltips: {
                mode: 'index'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Module',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Message Coverage'
                }
            }
        }
    })
}

MessagesChart();

//Fetch Data from API

async function getMessagesData() {

    let siteKey = 'argoscouk',
        moduleName = 'product',
        experienceId = 'pdp-v1',
        startDate = '2021-09-07',
        endDate = '2021-09-07';
    const taggUrl = `http://prdreporting01.taggstar.net:8000/api/v4/site/${siteKey}/module/${moduleName}/impressions/messages/report?startDate=${startDate}&endDate=${endDate}&experienceId=${experienceId}`;


    const response = await fetch(taggUrl)
    const pieChatData = await response.json()

    const coverage = pieChatData.messageValues.map((x) => x.coverage * 100)
    const code = pieChatData.messageValues.map((x) => x.code)

    coverageData = coverage
    codeLabel = code
}