class DatabaseConnector {
  private static connector: DatabaseConnector;

  private constructor() {
    console.log('DatabaseConnector:constructor');
  }

  public static getConnector(): DatabaseConnector {
    if (!DatabaseConnector.connector) {
      DatabaseConnector.connector = new DatabaseConnector();
    }

    return DatabaseConnector.connector;
  }
};


(() => {
  const db1 = DatabaseConnector.getConnector();
  const db2 = DatabaseConnector.getConnector();

  if (db1 === db2) {
    console.log('db1 and db2 contain the same instance');
  } else {
    console.log('this should happen');
  }
})();
