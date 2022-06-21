const validMock = {
  "walls": [
    {
      "height": 3.00,
      "width": 2.20,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 4.00,
      "width": 3.50,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 5.00,
      "width": 7.20,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 3.50,
      "width": 2.40,
      "doors": 0,
      "windows": 0
    }
  ]
};

const invalidMock = {
  "walls": [
    {
      "height": 3.00,
      "width": 2.20,
      "windows": 0
    },
  ]
};


const invalidAreaMock = {
  "walls": [
    {
      "height": 1.00,
      "width": 0.20,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 4.00,
      "width": 3.50,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 5.00,
      "width": 7.20,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 3.50,
      "width": 2.40,
      "doors": 0,
      "windows": 0
    }
  ]
};

const invalidAreaWithDoorsOrWindowsMock = {
  "walls": [
    {
      "height": 3.00,
      "width": 2.20,
      "doors": 3,
      "windows": 0
    },
    {
      "height": 4.00,
      "width": 3.50,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 5.00,
      "width": 7.20,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 3.50,
      "width": 2.40,
      "doors": 0,
      "windows": 0
    }
  ]
};

const invalidWallHeightMock = {
  "walls": [
    {
      "height": 2.00,
      "width": 2.20,
      "doors": 1,
      "windows": 0
    },
    {
      "height": 4.00,
      "width": 3.50,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 5.00,
      "width": 7.20,
      "doors": 0,
      "windows": 0
    },
    {
      "height": 3.50,
      "width": 2.40,
      "doors": 0,
      "windows": 0
    }
  ]
};

const validResponse = {
  "data": {
    "18": 0,
    "3.6": 3,
    "2.5": 0,
    "0.5": 4
  }
};

const invalidResponse = {
  "error": "doors in wall 0 is required"
};

const invalidAreaResponse = {
  "error": "Area is invalid. Wall area must be between 1 and 50"
};

const invalidAreaWithDoorsOrWindowsResponse = {
  "error": "Doors and windows area is invalid. Doors and windows area must be less than 50% of wall area"
}

const invalidWallHeightResponse = {
  "error": "Wall height must be at least 30 centimeters bigger than door height"
}

module.exports = {
  validMock,
  validResponse,
  invalidAreaMock,
  invalidAreaResponse,
  invalidAreaWithDoorsOrWindowsMock,
  invalidAreaWithDoorsOrWindowsResponse,
  invalidWallHeightMock,
  invalidWallHeightResponse,
  invalidMock,
  invalidResponse
}