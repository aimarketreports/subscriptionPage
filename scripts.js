function subscribe(tier) {
  // For now, just simulate selection
  switch(tier) {
    case 'tier1':
      alert("You selected Tier 1 - Junior Analyst ($12.99/month)");
      break;
    case 'tier2':
      alert("You selected Tier 2 - Executive ($25.99/month)");
      break;
    case 'tier3':
      alert("You selected Tier 3 - Senior VP ($45.99/month)");
      break;
    default:
      alert("Unknown tier");
  }

  // TODO: Connect to backend to create Stripe checkout session
  // Example:
  // fetch("/create-checkout-session", { method: "POST", body: JSON.stringify({ tier }) })
  //   .then(res => res.json())
  //   .then(data => window.location.href = data.url);
}
