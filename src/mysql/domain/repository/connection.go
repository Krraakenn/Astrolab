package repository

import (
	"Astrolab/src/mysql/domain/models"
	"context"
)

type ConnectionRepository interface {
	ConnectionToDatabase(ctx context.Context, connection *models.Connection) error
}
