# Locations

```ts
const locationsApi = client.locationsApi;
```

## Class Name

`LocationsApi`

## Methods

* [List Locations](../../doc/api/locations.md#list-locations)
* [Create Location](../../doc/api/locations.md#create-location)
* [Retrieve Location](../../doc/api/locations.md#retrieve-location)
* [Update Location](../../doc/api/locations.md#update-location)


# List Locations

Provides details about all of the seller's [locations](https://developer.squareup.com/docs/locations-api),
including those with an inactive status.

```ts
async listLocations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListLocationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListLocationsResponse`](../../doc/models/list-locations-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await locationsApi.listLocations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Location

Creates a [location](https://developer.squareup.com/docs/locations-api).
Creating new locations allows for separate configuration of receipt layouts, item prices,
and sales reports. Developers can use locations to separate sales activity through applications
that integrate with Square from sales activity elsewhere in a seller's account.
Locations created programmatically with the Locations API last forever and
are visible to the seller for their own management. Therefore, ensure that
each location has a sensible and unique name.

```ts
async createLocation(
  body: CreateLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateLocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateLocationRequest`](../../doc/models/create-location-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateLocationResponse`](../../doc/models/create-location-response.md)

## Example Usage

```ts
const contentType = null;
const bodyLocationAddress: Address = {};
bodyLocationAddress.addressLine1 = '1234 Peachtree St. NE';
bodyLocationAddress.locality = 'Atlanta';
bodyLocationAddress.administrativeDistrictLevel1 = 'GA';
bodyLocationAddress.postalCode = '30309';

const bodyLocation: Location = {};
bodyLocation.name = 'Midtown';
bodyLocation.address = bodyLocationAddress;
bodyLocation.description = 'Midtown Atlanta store';

const body: CreateLocationRequest = {};
body.location = bodyLocation;

try {
  const { result, ...httpResponse } = await locationsApi.createLocation(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Location

Retrieves details of a single location. Specify "main"
as the location ID to retrieve details of the [main location](https://developer.squareup.com/docs/locations-api#about-the-main-location).

```ts
async retrieveLocation(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to retrieve. Specify the string<br>"main" to return the main location. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLocationResponse`](../../doc/models/retrieve-location-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await locationsApi.retrieveLocation(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Location

Updates a [location](https://developer.squareup.com/docs/locations-api).

```ts
async updateLocation(
  locationId: string,
  body: UpdateLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateLocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to update. |
| `body` | [`UpdateLocationRequest`](../../doc/models/update-location-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateLocationResponse`](../../doc/models/update-location-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const contentType = null;
const bodyLocationBusinessHoursPeriods: BusinessHoursPeriod[] = [];

const bodyLocationBusinessHoursperiods0: BusinessHoursPeriod = {};
bodyLocationBusinessHoursperiods0.dayOfWeek = 'FRI';
bodyLocationBusinessHoursperiods0.startLocalTime = '07:00';
bodyLocationBusinessHoursperiods0.endLocalTime = '18:00';

bodyLocationBusinessHoursPeriods[0] = bodyLocationBusinessHoursperiods0;

const bodyLocationBusinessHoursperiods1: BusinessHoursPeriod = {};
bodyLocationBusinessHoursperiods1.dayOfWeek = 'SAT';
bodyLocationBusinessHoursperiods1.startLocalTime = '07:00';
bodyLocationBusinessHoursperiods1.endLocalTime = '18:00';

bodyLocationBusinessHoursPeriods[1] = bodyLocationBusinessHoursperiods1;

const bodyLocationBusinessHoursperiods2: BusinessHoursPeriod = {};
bodyLocationBusinessHoursperiods2.dayOfWeek = 'SUN';
bodyLocationBusinessHoursperiods2.startLocalTime = '09:00';
bodyLocationBusinessHoursperiods2.endLocalTime = '15:00';

bodyLocationBusinessHoursPeriods[2] = bodyLocationBusinessHoursperiods2;

const bodyLocationBusinessHours: BusinessHours = {};
bodyLocationBusinessHours.periods = bodyLocationBusinessHoursPeriods;

const bodyLocation: Location = {};
bodyLocation.businessHours = bodyLocationBusinessHours;
bodyLocation.description = 'Midtown Atlanta store - Open weekends';

const body: UpdateLocationRequest = {};
body.location = bodyLocation;

try {
  const { result, ...httpResponse } = await locationsApi.updateLocation(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```
