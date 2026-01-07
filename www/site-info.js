(async function() {
	if (sessionStorage['siteInfo'])
		displayOutput(JSON.parse(sessionStorage['siteInfo']));
	else {
		const res = await fetch('https://nekoweb.org/api/site/info/nons.page');
		
		if (!res.ok)
			return;
		
		const siteInfo = await res.json();
		sessionStorage['siteInfo'] = JSON.stringify(siteInfo);
		
		displayOutput(siteInfo);
	}
	
	function displayOutput(siteInfo) {
		const siteInfoOutput = document.getElementById('site-info');

		for (const key in siteInfo) {
			const element = siteInfoOutput.querySelector(`[data-name=${key}]`);
	
			if (!element)
				continue;
	
			if (key.endsWith('_at'))
				element.innerText = new Date(siteInfo[key]).toLocaleString();
			else
				element.innerText = siteInfo[key];
		}
	}
})();