import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Ensures the service is available app-wide
})
export class QuizPlayerScoreService {
  private players = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 130 },
    { name: 'Charlie', score: 100 },
    { name: 'David', score: 95 },
    { name: 'Eve', score: 90 },
    { name: 'Frank', score: 85 },
    { name: 'Grace', score: 80 },
    { name: 'Hank', score: 75 }
  ];

  /**
   * Retrieves the current list of players with their scores.
   * @returns Array of players sorted by score.
   */
  getPlayers() {
    return this.players.sort((a, b) => b.score - a.score); // Sort by highest score
  }

  /**
   * Updates a player's score or adds a new player.
   * @param name - The player's name.
   * @param score - The new score.
   */
  updateScore(name: string, score: number) {
    const player = this.players.find(p => p.name === name);
    if (player) {
      player.score = score; // Update score if player exists
    } else {
      this.players.push({ name, score }); // Add new player if not found
    }
  }
}
