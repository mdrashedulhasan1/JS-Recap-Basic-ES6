document.getElementById('add-border').addEventListener('click', function(){
    document.getElementById('friend-container').style.border = '2px solid gold';
})
function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'green';
    }
}
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendElement = document.createElement('div');
    friendElement.classList.add('friend');
    friendElement.innerHTML = `
        <h3 class="friend-name">Add New Friend</h3>
        <p>Quos consectetur culpa veritatis repellat!</p>
    `;
    container.appendChild(friendElement);
})