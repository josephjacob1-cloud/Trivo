"""coverimage added

Revision ID: c36e4138fa19
Revises: 
Create Date: 2026-10-28 14:20:59.357562

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'c36e4138fa19'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "packages",
        sa.Column("coverImage", sa.String(), nullable=True)
    )


def downgrade() -> None:
    op.drop_column("packages", "coverImage")

    