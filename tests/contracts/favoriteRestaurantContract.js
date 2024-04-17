const itActsAsFavoriteRestaurantModel = (faroriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    faroriteRestaurant.putRestaurant({ id: 1 });
    faroriteRestaurant.putRestaurant({ id: 2 });

    expect(await faroriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await faroriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await faroriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    faroriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await faroriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    faroriteRestaurant.putRestaurant({ id: 1 });
    faroriteRestaurant.putRestaurant({ id: 2 });

    expect(await faroriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    faroriteRestaurant.putRestaurant({ id: 1 });
    faroriteRestaurant.putRestaurant({ id: 2 });
    faroriteRestaurant.putRestaurant({ id: 3 });

    await faroriteRestaurant.deleteRestaurant(1);

    expect(await faroriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    faroriteRestaurant.putRestaurant({ id: 1 });
    faroriteRestaurant.putRestaurant({ id: 2 });
    faroriteRestaurant.putRestaurant({ id: 3 });

    await faroriteRestaurant.deleteRestaurant(4);

    expect(await faroriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should be able to search for restaurants', async () => {
    faroriteRestaurant.putRestaurant({ id: 1, name: 'restaurant a' });
    faroriteRestaurant.putRestaurant({ id: 2, name: 'restaurant b' });
    faroriteRestaurant.putRestaurant({ id: 3, name: 'restaurant abc' });
    faroriteRestaurant.putRestaurant({ id: 4, name: 'ini mah restaurant abcd' });

    expect(await faroriteRestaurant.searchRestaurants('restaurant a')).toEqual([
      { id: 1, name: 'restaurant a' },
      { id: 3, name: 'restaurant abc' },
      { id: 4, name: 'ini mah restaurant abcd' },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
