import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe('AppController', () => {
  describe('getVenues', () => {
    it('should return an array of 10 venues', async () => {
      // Arrange
      const controller = new AppController(new AppService());
      
      // Act
      const result = await controller.getVenues(10);

      // Assert
      expect(result.length).toBe(10);
    });

    it('should return default 15 venues when limit is not set', async () => {
      // Arrange
      const controller = new AppController(new AppService());
      
      // Act
      const result = await controller.getVenues(undefined);

      // Assert
      expect(result.length).toBe(15);
    });

    it('should return 100 venues when limit is greater than 100', async () => {
      // Arrange
      const controller = new AppController(new AppService());
      
      // Act
      const result = await controller.getVenues(999);

      // Assert
      expect(result.length).toBe(100);
    })
  });
});
