// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// WalletConnect Integration
document.getElementById('connect-wallet').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            alert(`Connected to wallet: ${accounts[0]}`);
        } catch (error) {
            console.error('User rejected the request:', error);
        }
    } else {
        alert('Please install MetaMask or another Ethereum wallet provider.');
    }
});
