export default (app) => {
  app.post(
    `/tenant/:tenantId/news`,
    require('./newsCreate').default,
  );
  app.put(
    `/tenant/:tenantId/news/:id`,
    require('./newsUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/news/import`,
    require('./newsImport').default,
  );
  app.delete(
    `/tenant/:tenantId/news`,
    require('./newsDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/news/autocomplete`,
    require('./newsAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/news`,
    require('./newsList').default,
  );
  app.get(
    `/tenant/:tenantId/news/:id`,
    require('./newsFind').default,
  );

  app.get(
    `/tenant/:tenantId/news/count`,
    require('./Newscount').default,
  );
};
