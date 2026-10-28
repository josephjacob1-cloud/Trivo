"""removed nullable false from model

Revision ID: 04c6509e3091
Revises: 9cda677847f2
Create Date: 2026-10-28 15:08:56.576301

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '04c6509e3091'
down_revision: Union[str, Sequence[str], None] = '9cda677847f2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
