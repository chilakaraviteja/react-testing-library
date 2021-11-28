const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Ravi",
                    last: "Teja"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "ravitejaC"
                }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
