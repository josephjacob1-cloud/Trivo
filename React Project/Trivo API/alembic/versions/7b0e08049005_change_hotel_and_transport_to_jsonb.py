
"""change hotel and transport to JSONB

Revision ID: 7b0e08049005
Revises: 6935dbca2148
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers
revision: str = '7b0e08049005'
down_revision: Union[str, Sequence[str], None] = '6935dbca2148'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Change hotel and transport columns from ARRAY to JSONB."""

    op.alter_column(
        'packages',
        'hotel',
        existing_type=postgresql.ARRAY(sa.VARCHAR()),
        type_=postgresql.JSONB(),
        existing_nullable=True,
        postgresql_using='to_jsonb(hotel)'
    )

    op.alter_column(
        'packages',
        'transport',
        existing_type=postgresql.ARRAY(sa.VARCHAR()),
        type_=postgresql.JSONB(),
        existing_nullable=True,
        postgresql_using='to_jsonb(transport)'
    )


def downgrade() -> None:
    """Downgrade is intentionally blocked.

    JSONB may contain structured objects, which cannot be safely
    converted back to the original VARCHAR[] format.
    """

    raise NotImplementedError(
        "Cannot safely downgrade hotel and transport JSONB columns "
        "to VARCHAR[] without a data conversion strategy."
    )
