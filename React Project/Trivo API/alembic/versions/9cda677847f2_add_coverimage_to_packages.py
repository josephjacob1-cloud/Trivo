"""add coverImage to packages

Revision ID: 9cda677847f2
Revises: c36e4138fa19
Create Date: 2026-10-28 15:03:26.085469

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9cda677847f2'
down_revision: Union[str, Sequence[str], None] = 'c36e4138fa19'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None



def upgrade() -> None:
    op.add_column(
        "packages",
        sa.Column("coverImage", sa.String(), nullable=True)
    )


def downgrade() -> None:
    op.drop_column("packages", "coverImage")