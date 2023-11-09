# TA-ServerExample

## Description
Serves example data back to the main Test Author program. Does not actually perform verification for information such as the Bearer tokens or testplan IDs.

## Endpoints
See the GitHub wiki for [full documentation](https://github.com/TiiLeaf/TA-ServerExample/wiki/Endpoint-Specifications).

### `[GET] /testplans/`
Description: Lists the name and ID of every testplan within the CMDB account specified by the Bearer token.

URL Params: none

Headers: `Authorization: Bearer [token]`

Body: none

### `[GET] /testplans/<id>`
Description: Provides the contents of a specific testplan, determined by ID, from the CMDB account specified by the Bearer token.

URL Params: `<id>`

Headers: `Authorization: Bearer [token]`

Body: none

### `[POST] /testplans/<id>`
Description: Saves the contents of a specific testplan, determined by ID, from the CMDB account specified by the Bearer token.

URL Params: `<id>`

Headers: `Authorization: Bearer [token]`

Body: `[testplan file contents (see exampleTestplan.json)]`
